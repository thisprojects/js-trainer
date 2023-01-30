import React from "react";
import WithScrollToBottom from "./WithScrollToBottom";

const MapListOfMethods = ({ array }) => array.map(item => <p>{ item } &#10003;</p>);

export default WithScrollToBottom(MapListOfMethods);
