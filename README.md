# Dynamic breadcrumb integrated

This is a component showing how to integrate breadcrumb with react-router to create dynamic breadcrumb.

- The breadcrumb shows the current location in the directory structure (example: home/name/projectA/fileB.txt)
- Each part in the breadcrumb is separated and clickable. Clicking on a folder in the breadcrumb will take you to that folder.
- The main portion of the page should display the contents of the current directory, or "THIS IS FILE: {filename}" if the path is a file. Clicking on any of the files or folders in this portion of the page should take you to that file.
- Using a single endpoint: GET /path/{mypath} to return the data about the given path. For directories, there only includes direct children, not the full subtree.

![img](https://github.com/wallacezzzzz007/breadcrumbs_component/blob/master/images/breadcrumbs.png)
Here is an example to show the location at: /home/myname/projects/mysupersecretproject/mysupersecretfile.

# Testing

Please replace data in data.js, then run 'npm start'
