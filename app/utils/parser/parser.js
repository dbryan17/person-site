/*
------ custom tokens --------
%%b{} - for bold text
%%a{link[display]} - for links
%%n - newline
*/

/*
turns \ns to array of divs with inner-page-chunk className
*/
const parse = (rawText, hasNoClassName) => {
  return rawText.split("%%n").map((content, idx) => (
    <p key={idx} className={hasNoClassName ? "" : "inner-page-chunk"}>
      {parseLinks(parseBolds(content))}
    </p>
  ));
};

// turns %%as into links
// not first one, rawText is now an array
const parseLinks = (rawText) => {
  const regex = /%%a{([^[]*)\[([^\]]*)\]}/g;
  // map the array to make more elements for links
  return rawText.map((text, idx) => {
    // if it already an element, like bold, just return
    if (typeof text !== "string") {
      return text;
    }
    // if it is a string, parse links
    return text.split(regex).map((part, idx) => {
      // second element is link, third is display
      if (idx % 3 === 1) {
        return (
          // think I can make all links have the rel
          <a href={part} target="_blank" rel="noopener noreferrer" key={idx}>
            {text.split(regex)[idx + 1]}
          </a>
        );
        // first element is regular text, third is regular text after bold on same line
      } else if (idx % 3 === 0) {
        return part;
      }
    });
  });
};

// first one, don't need a for each because text isn't an array
// need to turn it into an array to handle jsx elements
const parseBolds = (rawText) => {
  const regex = /%%b{([^{}]*)}/g;
  let result = rawText.split(regex).map((part, idx) => {
    // Every second element is text to be bolded
    if (idx % 2 === 1) {
      return <strong key={idx}>{part}</strong>;
      // first is regular text
    } else {
      return part;
    }
  });

  return result;
};

export { parse };
