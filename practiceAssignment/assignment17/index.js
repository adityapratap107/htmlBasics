const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeatures = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

const content = [
    [
        "React is extremely propular",
        "It makes building complex, interactive UI's a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Full stack framework)",
        "React Native (build native mobile apps with React)",
    ],
]

// highlight button
function highlightButton(btn) {
    console.log(btn);
    btnWhyReact.className = "";
    btnCoreFeatures.className = "";
    btnResources.className = "";
    btn.className = "active"
}

function displayContent(items) {
    let listContent = "";
    for(const item of items) {
        listContent += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabContent.innerHTML="" // clear exisiting content
    list.innerHTML = listContent;  // insert new content
    tabContent.append(list);
}

// handle click function
function handleClick(event) {
    const btnId = event.target.id;
    highlightButton(event.target);
    if(btnId === "btn-why-react") {
        displayContent(content[0]);
    } else if(btnId === "btn-core-features") {
        displayContent(content[1]);
    } else  {
        displayContent(content[2]);
    }
}

// to show content initially
displayContent(content[0]);


// click listeners
btnWhyReact.addEventListener("click", handleClick);
btnCoreFeatures.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);