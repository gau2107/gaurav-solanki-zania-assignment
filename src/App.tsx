import React, { useEffect, useState } from "react";
import "./App.css";
import CardItem from "./components/CardItem";
import { sortByPosition } from "./utils";
import ImageModal from "./components/ImageModal";

export interface listItem {
  type: string;
  title: string;
  position: number;
  image: string;
}
function App() {
  const [list, setList] = useState<listItem[]>([]);
  const [selectedItemPositionId, setSelectedItemPositionId] =
    useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let tempList = JSON.parse(localStorage.getItem("imageList") || "null");
    if (tempList && tempList.length) {
      setList(sortByPosition([...tempList]));
    } else {
      getData();
    }
  }, []);

  const handleDragStart = (card: listItem) => {
    setSelectedItemPositionId(card.position);
  };

  const handleDrop = (card: listItem) => {
    if (selectedItemPositionId !== card.position) {
      let tempList = [...list];

      const dragIndex = tempList.findIndex(
        (obj) => obj.position === selectedItemPositionId
      );
      const dropIndex = tempList.findIndex(
        (obj) => obj.position === card.position
      );

      let element = tempList.splice(dragIndex, 1)[0];
      tempList.splice(dropIndex, 0, element);

      for (let i = 0; i < tempList.length; i++) {
        tempList[i].position = i;
      }
      setList(sortByPosition([...tempList]));
      setSelectedItemPositionId(0);
      localStorage.setItem("imageList", JSON.stringify(tempList));

    }
  };

  const handleSelectToggleImage = (image: string) => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage(image);
  };

  const getData = async () => {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    const tempList = sortByPosition([...data]);
    localStorage.setItem("imageList", JSON.stringify(tempList));
    setList(tempList);
  };

  return (
    <div className="app">
      <div className="grid-container">
        {list.map((data) => {
          return (
            <div
              key={data.position}
              draggable={true}
              onDragStart={() => handleDragStart(data)}
              onDragOver={(ev: React.DragEvent<HTMLDivElement>) =>
                ev.preventDefault()
              }
              onDrop={() => handleDrop(data)}
            >
              <CardItem
                heading={data.title}
                image={data.image}
                onImageSelect={() => handleSelectToggleImage(data.image)}
              />
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <ImageModal
          image={selectedImage}
          onClose={() => handleSelectToggleImage("")}
        />
      )}
    </div>
  );
}

export default App;
