/*
------ custom tokens --------
%%b{} - for bold text
%%a{link[display]} - for links
%%n - newline

NOTE - tabbing down with `s causes \n
NOTE - new lines just make spaces by default, so making my own
*/

// Sudoku Graph Theory Web App November 2022 - December 2022
// https://dbryan17.github.io/sudokuGraph/
// • Investigated the graph representation of sudoku, and created a web application that generates valid
// puzzles and allows the user to solve them in both grid and graph form.
// • Implemented graph coloring algorithms to auto-solve the puzzle, complete with animations to illustrate
// how they work.
// • Developed many algorithms that represent human-solving strategies, allowing for an advanced help
// feature which reveals solving methods to the user.
// • Delivered a detailed report on the sudoku graph and the implementation of my application. Presented the
// work via an oral presentation.
// Mountain Project Climbing Database & Web Scraper
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
        writing a script without a c value. {"\n"}
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
};

const projects = [FractalVoyager, SudokuGraph];

export { projects };
