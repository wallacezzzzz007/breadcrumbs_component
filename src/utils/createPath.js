import NavComponent from "../components/nav_component";
import ErrorPage from "../components/error-page";
import RootPage from "../components/root_page";

function CreatePathMap(dataStructure) {
  const pathMap = new Map();
  if (Object.keys(dataStructure.children).length) {
    const start = "";
    const pre = "";
    PathCreateRecursion(start, dataStructure, pathMap, pre);
  } else {
    const key_pre = { key: "root", previous: null, type: null };
    pathMap.set(`/`, key_pre);
  }
  return pathMap;
}

function PathCreateRecursion(start, data, map, pre) {
  if (data.type !== "dir" || Object.keys(data.children).length === 0) {
    return;
  }
  for (const [key, value] of Object.entries(data.children)) {
    const key_pre = [key, pre, value.type];
    map.set(`${start}/${key}`, key_pre);
    let temp = `${start}/${key}`;
    PathCreateRecursion(temp, value, map, key);
  }
}

function getContents(map, keyName, path) {
  const contents = [];
  for (const [key, value] of map) {
    if (
      value[1] == keyName &&
      key.slice(0, -(value[0].length + 1)).valueOf() == path.valueOf()
    ) {
      contents.push([key, value[0]]);
    }
  }
  return contents;
}

export function CreateRouter(data) {
  const lists = [
    {
      path: "/",
      element: <RootPage keyLists={Object.keys(data.children)} />,
      errorElement: <ErrorPage />,
    },
  ];
  const pathMap = CreatePathMap(data);
  for (const [key, value] of pathMap) {
    const path = {
      path: key,
      element: (
        <NavComponent
          contents={getContents(pathMap, value[0], key)}
          nowKey={key}
          keyName={value[0]}
          type={value[2]}
        />
      ),
      errorElement: <ErrorPage />,
    };
    lists.push(path);
  }

  return lists;
}
