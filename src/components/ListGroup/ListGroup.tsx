import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface listItemProps {
  active: boolean;
}

const ListItem = styled.li<listItemProps>`
  padding: 5px 0;
  background: ${props => (props.active ? "blue" : "none")};
  color: ${props => (props.active ? "white" : "black")};
  border-radius: ${props => (props.active ? "5px" : "none")};
  padding: ${props => (props.active ? "10px" : "none")};
  font-style: ${props => (props.active ? "italic" : "normal")};
`;

interface Props {
  items: [];
  heading: String;
  onSelectItem: (itemname: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items.map(item => <li className="list-group-item">{item}</li>);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items to Display</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            // onClick={() => console.log(item)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
