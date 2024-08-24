/*
------ custom tokens --------
%%b{} - for bold text
%%a{link[display]} - for links
%%n - newline

NOTE - tabbing down with `s causes \n
NOTE - new lines just make spaces by default, so making my own
*/

const Venmo = {
  title: "Automated Venmo Rent and Utilities Tool",
  subtitle: "A small project someone may find useful",
  buttons: [
    {
      link: "https://github.com/dbryan17/venmo-gmail-requests",
      display: "Source Code",
    },
  ],
  content: `
  This tool has two functions: 1) automatically paying my rent via venmo every month, and 2) scrapping my emails for utilities charges and requesting my housemates for their share.
  I built this because doing it manually was getting to be a pain, and I thought there must be a better way. %%n
  *Code walkthrugh to come*
  `,
};

const Crosswords = {
  title: "Crossword Generator Web App",
  subtitle: "Small project to assist in crossword creatation",
  buttons: [
    {
      link: "https://github.com/dbryan17/crossword-react",
      display: "Source Code",
    },
  ],
  content: `
  Given a partially filled or empty crossword grid, an algorithm uses a dictionary of words to generate a valid crossword if one is possible. The backtracking algorithm uses an ordered trie data structure to generate the grid.
  In addition to the algorithm, I wrote a web app that allows users to create their own partially filled grid using NYT style grid navigation and upload their own words to be included in the dictionary.%%n
  I abonded this project before adding a large dictionary becuase I found a great tool already out there: %%a{https://crosshare.org/[Crosshare]}.
  `,
};

const juliaSetThreeD = {
  title: "3D Julia Set Transformations - In Progress",
  subtitle: "An extenstion onto Fractal Voyager",
  buttons: [
    {
      link: "https://github.com/FractalVoyager/threeD",
      display: "Source Code",
    },
    {
      link: "files/threeD/example.stl",
      display: "Example Generated .stl File",
    },
  ],
  content: `The purpose of this project is to create 3D shapes from julia set transformations. On Fractal
  Voyager, a user will draw a line across a paramter plane fractal. Then, the code will run and it will produce an
  stl file which is made up of julia sets (dynamical plane fractals) along that line in 3D space. This will be a solid shape.
  `,
  folds: [
    {
      title: "Learn more about steps to generate the shapes",
      content: `
      First, Fractal Voyager must generate many dynamical plane fractals along the line. Each fractal is converted to a black and white image where black pixels are in the set. Then, this is converted to a binary that representes if each pixel is black or white, which is passed to a seperate program (for now).%%n
      Each fractal image must be converted to a polygon and triangulated. I created an outliner algorithm that captures ordered points which represent the outline of the fractal shape.
      This algorithm handles parts of the shape that are only one pixel long and tails off of the shape by splitting points to be smaller than the pixel size. Once we have the list of ordered points which represent a polygon, this is triangulated with the %%a{https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf[ear clip]} method.%%n
      This triangulated shapes represent the cross sections of the 3D shape. Now, we must create the exterior sides of the shape. I developed an algorithm which uses the ordered points to create triangles that represent the sides between two cross sections.
      Ensuring that no lines cross in 3D space is particularly tricky, and we are still handling more complex cases.%%n
      Once we do the above for each cross section, we have a list of triangles that represent the 3D shape. This is passed to a function which generates an stl file for all the trinagles.
      `,
    },
  ],
  imgs: [
    "/pictures/projects/threeD0.png",
    "/pictures/projects/threeD1.png",
    "/pictures/projects/threeD2.png",
  ],
};

const MtpDb = {
  title: "Mountain Project Climbing Web Scrapper & Database",
  subtitle: "Databases class final project",
  buttons: [
    {
      link: "https://github.com/dbryan17/mountainproject-scrapper-db/tree/main",
      display: "Source Code",
    },
  ],
  content: `
  Designed and provisioned a relational database to hold data from a social media driven rock climbing
 guidebook: %%a{https://www.mountainproject.com/[Mountain Project]}. The data for the database was gathered via a web scrapper that collected
 aproximately ten percent of all the data on the guidebook application, corresponding to over one million rows in one of the tables. 
The database was used to write complex SQL queries to gain insights on climbing communities and areas.
  `,
  folds: [
    {
      title: "See more about the queries",
      content: `
      As a nerdy climber, I've always had many unanswered questions about climbing that could be answered with the data held in the omnipresent 
      online guideboook and social media site mountain project. For example, what area has the most easy and safe climbs? Who is the biggest %%a{https://www.toprockclimbing.ca/blog/2019/5/7/why-does-sandbagging-occur#:~:text=Sandbag.,easier%20than%20the%20declared%20grade.[sandbagger]}? 
      What climbs to the OG climbers love? Of course, this would be very innacurate since not all routes and ascents are logged on mountain project, and I was only able to gather about 
      ten percent of the data on the website. I was virtually recreating the database for the site, and it took my macbook running for a week straight to gather that much data. %%n

      Despite the clear limitations, I still found the results intriguing and even useful. In addition to querying for the questions above, some other queries I wrote were: a state vs state comparison based on the quality of its climbing, 
      what climbers are interested in other than climbing, the boldest climber, the first user on mountain project, all of the first ascents for a specific climber, the route with the most views, and many others. You can see them %%a{https://github.com/dbryan17/mountainproject-scrapper-db/blob/main/final_queries.sql[here]}. 
      `,
    },
  ],
};

const SudokuGraph = {
  title: "Sudoku Graph Theory",
  subtitle: "Web application to visualize, play, and solve sudoku graphs",
  buttons: [
    {
      link: "https://dbryan17.github.io/sudokuGraph/",
      display: "Website",
    },
    {
      link: "https://github.com/dbryan17/dbryan17.github.io/tree/main/sudokuGraph",
      display: "Source Code",
    },
    {
      link: "files/sudoku/presentation.pdf",
      display: "Presentation",
    },
    {
      link: "files/sudoku/paper.pdf",
      display: "Paper",
    },
  ],
  content: `
  The web app allows users to solve sudoku puzzles in grid or graph form. 
  It features backtracking algorithms to create a valid grid based on a given number of digits,
  and automatically solve (with animations) the puzzle with 
  %%a{https://en.wikipedia.org/wiki/Graph_coloring[vertex graph coloring]}.
  `,
  folds: [
    {
      isFoldInFold: true,
      title: "Learn about the graph theory",
      content: `
      In the sudoku graph, vertices represent cells, and adjacent vertices (vertices with edges between them), 
      cannot be the same "number". This "number" can be any symbol; in a typical sudoku they are numbers, 
      in the sudoku graph they are colors. Any given cell cannot be the same number as any cell in the row 
      (8 others), column (8 others), and block (4 unique others). This gives us that each vertex will have 20 edges (20 regular graph).
      Furthermore, the graph has 81 total vertices, and thus, 810 total edges. %%n
      Another unqiue structure of the sudoku graph is its cliques.
      A clique is a complete subgraph, of which there a 27 with 9 vertices in the sudoku graph. Each block, row, and column is a 9-vertex-clqiue because no vertex in any one of those sets can be the same symbol as any other, giving us an edge between every vertex, thus a complete subgraph. 
      `,
      innerFold: {
        title: "Learn more about the graph colorings",
        content: `
        In the sudoku graph, when we represent the symbols assigned to vertices as colors, we can solve the sudoku with a graph vertex coloring. A valid solved sudoku is a valid coloring. 
        A valid coloring is one in which the color of each vertex is unquie from the color of all vertices that it is adjacent to. 
        So, all graph cliques have a exactly 9 colors. In terms of the grid, this means that each row, column, and block has unqiue numbers. %%n
        In the application, two backtracking algorithms were implemented to 
        complete the graph coloring of a sudoku. It is worth noting that a valid sudokou has exactly one 9-color solution. A different backtracking alogirthm to generate valid grids ensures this.
  
  
  
        `,
      },
    },

    {
      title: "See more app features",
      content: `
      Another app feature is the "help" button which aids users in solving the puzzle. Many human-solving strategies were implemented which slowly reveals the answer to a cell. 
      First, a cell that can be solved with human-solving strategies is highlighted. Then, the cells that give the answer to that cell are highlighted. Finally, the answer is revealed. 
      The solving strategies are ranked from easiest to hardest, so the easiest stratigies are shown first.

      `,
    },
  ],
  imgs: ["/pictures/projects/sudoku0.png", "/pictures/projects/sudoku1.png"],
};

// The purpose of this project
// was to illustrate the strucutre of sudoku through graph theory, allowing users to gain a deeper understanding
// of both sudoku puzzles and how graphs can be used to represent familiar structures.

const FractalVoyager = {
  title: `Fractal Voyager`,
  subtitle: `CS Honors Thesis, advised by Kevin Angstadt`,
  buttons: [
    {
      link: "https://fractalvoyager.github.io/",

      display: "Website",
    },
    {
      link: "https://github.com/FractalVoyager",
      display: "Source Code",
    },
    {
      link: "files/fv/poster.pdf",
      display: "Poster",
    },
    {
      link: "files/fv/paper.pdf",
      display: "Paper",
    },
  ],
  content: `
  Fractal Voyager is a fractal generating web application to assist
  in %%a{https://en.wikipedia.org/wiki/Complex_dynamics[complex dynamics]} research. 
  It includes a simple scripting langauge based on 
  %%a{https://pi.math.cornell.edu/~noonan/fstream.html[Fractal Stream]}.
  This langauge, in conjuction with app features, enables users to
  generate and explore fractals based on inputted scripts representing
  iterative functions and conditions.
  `,
  folds: [
    {
      isFoldInFold: false,
      title: `Learn why Fractal Voyager is fast (WebAssembly)`,
      content: `
      Fractal Voyager provides an innovative application of %%a{https://webassembly.org/[WebAssembly]}. A source-to-source compiler translates custom scripts to C++,
      which can generate an array representation of the complex plane
      with color values. This compiler is compiled to WebAssembly
      allowing scripts to be enetered and compiled on the web. Then, the
      C++ that was generated is compiled to WebAssembly. This step is
      particularly tricky, and uses the core functionality of an 
      %%a{https://github.com/jprendes/emception[in-browser C++ code editor]}.
      Finally, the WebAssembly is run on the web to generate fractals.
      `,
    },
    {
      isFoldInFold: true,
      title: `Learn about the math`,
      content: `
      The language and application supports paramter and dynamical plane fractals, 
      along with point orbit visualizations. The parameter plane is the complex plane 
      when a function is iterated until a condition is met with respect to a fixed point. 
      For example, z = z^2+c. It includes the paramter, c*, which changes with respect 
      to the passed in point across the complex plane. The dynamical plane is the complex 
      plane when a function is iterated until a condition is met with respect to a 
      variable point, z, that changes with respect to the passed in point across the 
      complex plane. For example, z = z^2 − 0.79 + 0.15i. A complex number’s orbit 
      for a particular dynamical system is the value of the number after each iteration 
      of the function.`,
      innerFold: {
        isFoldInFold: false,
        title: `See more about the app`,
        content: `
        The compiled WebAssembly is paramterized, allowing users to
        explore a function without needed to recompile. A key
        feature of this is switching between the paramter plane and
        dynamical plane by selected a point to fix the c value. One
        can also select a point in the dynamical plane to see
        it's orbit, all done without needing to write a new
        script. A dynamical plane fractal can also be generated by
        writing a script without a c value.
        The fractal images can be altered by changing the
        breakpoints of the funciton conditions. For example, one
        condition that can be put on a funciton is "until z
        stops", which means consider a point in the fractal set
        if z never converges. For this condition, one can alter the
        epsilon value: the difference between the current value of z
        versus the last value of z to say the function converged.
        `,
      },
    },
  ],
  imgs: ["/pictures/projects/fv1.png", "/pictures/projects/fv2.png"],
};

const projects = [
  FractalVoyager,
  SudokuGraph,
  juliaSetThreeD,
  MtpDb,
  Crosswords,
  Venmo,
];

export { projects };
