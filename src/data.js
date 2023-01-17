const root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "file a.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
            projects: {
              type: "dir",
              children: {
                mysupersecretproject: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
              },
            },
          },
        },
        home_2: {
          type: "dir",
          children: {
            myname: {
              type: "dir",
              children: {
                "filea.txt": {
                  type: "file",
                },
                "fileb.txt": {
                  type: "file",
                },
                projects: {
                  type: "dir",
                  children: {
                    mysupersecretproject: {
                      type: "dir",
                      children: {},
                    },
                  },
                },
              },
            },
          },
        },
        projects: {
          type: "dir",
          children: {
            mysupersecretproject: {
              type: "dir",
              children: {
                mysupersecretfile: {
                  type: "file",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default root;
