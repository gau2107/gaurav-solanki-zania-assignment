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
    getData();
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
      tempList[dragIndex].position = card.position;
      tempList[dropIndex].position = selectedItemPositionId;
      setList(sortByPosition([...tempList]));
      setSelectedItemPositionId(0);
    }
  };

  const handleSelectToggleImage = (image: string) => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage(image);
  };

  const getData = async () => {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    setList(sortByPosition([...data]));
  };

  return (
    <div className="app">
      <div className="grid-container">
        {list.map((data) => {
          return (
            <div
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
