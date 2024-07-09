/*
------ custom tokens --------
%%b{} - for bold text
%%a{link[display]} - for links
%%n - newline
%%i{} - italics
*/

/*
turns \ns to array of divs with inner-page-chunk className
*/
import StravaEmbed from "@/app/components/blog/stravaEmbed";
const parse = (rawText, hasNoClassName) => {
  return rawText.split("%%n").map((content, idx) => (
    <div key={idx} className={hasNoClassName ? "" : "inner-page-chunk"}>
      {parseTokens(tokenize(content))}
      {/* {parseLinks(parseItalics(parseBolds(content)))} */}
    </div>
  ));
};

const tokenize = (text) => {
  const tokens = [];
  let current = "";
  let i = 0;

  while (i < text.length) {
    if (text[i] === "%" && text[i + 1] === "%") {
      // current is reg text, push
      if (current) {
        tokens.push({ type: "text", content: current });
        current = "";
      }
      let tokenEnd = text.indexOf("}", i);
      if (tokenEnd !== -1) {
        let tokenContent = text.substring(i + 4, tokenEnd);
        let type = text[i + 2]; // e.g., 'b' for bold
        tokens.push({ type, content: tokenContent });
        i = tokenEnd;
      }
    } else {
      current += text[i];
    }
    i++;
  }

  // Add any remaining text as a regular text token
  if (current) {
    tokens.push({ type: "text", content: current });
  }

  return tokens;
};

const parseTokens = (tokens) => {
  return tokens.map((token, idx) => {
    switch (token.type) {
      case "b":
        return <strong key={idx}>{token.content}</strong>;
      case "i":
        return <em key={idx}>{token.content}</em>;
      case "a":
        const [url, display] = token.content.split("[");
        return (
          <a href={url} key={idx} target="_blank" rel="noopener noreferrer">
            {display.slice(0, -1)}
          </a>
        ); // -1 to remove trailing ']'
      case "s":
        return <StravaEmbed id={token.content} key={token.content} />;
      case "img":
        const [alt, src] = token.content.split("[");
        return <img src={src.slice(0, -1)} alt={alt} key={idx} />; // -1 to remove trailing ']'
      case "text":
        return token.content;
      default:
        return token.content;
    }
  });
};

//////////////////////////
/////// old code /////////
//////////////////////////

// turns %%as into links
// not first one, rawText is now an array
const parseLinks = (rawText) => {
  const regex = /%%a{([^[]*)\[([^\]]*)\]}/g;
  // map the array to make more elements for links, its now an array of arrays after adding the italics
  return rawText.map((textArr) => {
    return textArr.map((text, idx) => {
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
  });
};

// not first one
// turns %%i{} into italics
const parseItalics = (rawText) => {
  const regex = /%%i{([^{}]*)}/g;
  // map the array to make more elements for links
  return rawText.map((text, idx) => {
    // if it already an element, like bold, just return
    if (typeof text !== "string") {
      return text;
    }
    return text.split(regex).map((part, i) => {
      if (i % 2 === 1) {
        return <em key={idx}>{part}</em>;
      } else {
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
