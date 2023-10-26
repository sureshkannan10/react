
elem=React.createElement("h1",{
    id:"heading",namee:"suresh"
},"hello world from react");
root=ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
 
{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

// syntax:React.createElement("element we want to create",{attributest},child_element)
// Nested=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"welcome")));
// Root=ReactDOM.createRoot(document.getElementById("root"));
// Root.render(elem +""+Nested)


// 1)create Element
// 2)create root elememnt
// 3)render created element in rot
parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading"},"This is heading 1 tag"),
    React.createElement("h2",{id:"heading"},"This is heading 2 tag")

],))
root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);