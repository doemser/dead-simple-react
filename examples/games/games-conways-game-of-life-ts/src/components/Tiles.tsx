import { Fragment } from "react";
import useStore from "../hooks/useStore";

export default function Tiles() {
  const { mapSize, tileSize } = useStore((state) => state.sizes);
  const mapTiles = useStore((state) => state.mapTiles);
  const toggleTile = useStore((state) => state.toggleTile);

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${mapSize}, ${tileSize}px)`,
        border: "2px solid black",
      }}
    >
      {mapTiles.map((column, columnIndex) => {
        return (
          <Fragment key={columnIndex}>
            {column.map((tile) => {
              return (
                <div
                  key={tile.id}
                  style={{
                    height: `${tileSize}px`,
                    border: "1px solid black",
                    background: tile.alive ? tile.color : "transparent",
                  }}
                  onClick={() => {
                    toggleTile(tile.id);
                  }}
                ></div>
              );
            })}
          </Fragment>
        );
      })}
    </section>
  );
}
