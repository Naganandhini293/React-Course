const heading = React.createElement(
    "h1",
    {
      id: "heading",
    },
    "Welcome Home!!"
  ); // Create element only create oobject
  
  const parent = React.createElement("div", { id: "Parent" }, [
    React.createElement("div", { id: "Child-1" }, [
      React.createElement("h1", {}, "Header 1"),
      React.createElement("h2", {}, "Header 2"),
    ]),
    React.createElement("div", { id: "Child-2" }, [
      React.createElement("h1", {}, "Header 1"),
      React.createElement("h2", {}, "Header 2"),
    ]),
  ]);
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent); //Render - used to create the tag and put it into the root element
  