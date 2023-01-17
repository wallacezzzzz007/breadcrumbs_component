import NavComponent from "../components/nav_component";
import ErrorPage from "../components/error-page";
import RootPage from "../components/root_page";
import _ from "lodash";

function CreatePathMap(dataStructure) {
  const pathMap = new Map();
  const start = "";
  PathCreateRecursion(start, dataStructure, pathMap);
  return pathMap;
}

function PathCreateRecursion(start, data, map) {
  if (data.type !== "dir" || Object.keys(data.children).length === 0) {
    return;
  }
  for (const [key, value] of Object.entries(data.children)) {
    let key_pre2 = [];
    if (value.type === "dir") {
      key_pre2 = [key, Object.keys(value.children), value.type];
    } else {
      key_pre2 = [key, "", value.type];
    }
    map.set(`${start}/${key}`, key_pre2);
    let temp = `${start}/${key}`;
    PathCreateRecursion(temp, value, map);
  }
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
      path: _.replace(key, " ", "-"),
      element: (
        <NavComponent
          contents={value[1]}
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
