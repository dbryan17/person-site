import { parse } from "@/app/utils/parser/parser";
import Image from "next/image";
const numWords = 250;
export default function BlogSnippet({ blog, isTr, id }) {
  // remove all pictures and stravas
  let link = "./blogs/" + (isTr ? "tripReports/" : "") + id;
  let cleanedText = blog.content.replace(/%%p\{.*?\}|\%\%s\{.*?\}/g, "");
  cleanedText = cleanedText.replace(/(%%n\s*){2,}/g, "%%n ");
  let wordArr = cleanedText.split(" ");
  let firstWords = wordArr.slice(0, numWords);
  firstWords = firstWords.join(" ");
  firstWords = firstWords + "%%a{" + link + "[... continue reading]}";

  const picsArr = blog.content.match(/%%p\{.*?\}/g) || [];
  console.log(picsArr);

  return (
    <>
      <section className="my-card">
        <h1 className="title has-text-success is-size-5">{blog.title}</h1>
        <h2 className="subtitle is-size-6 project-subtitle">{blog.date}</h2>
        {parse(firstWords)}

        {picsArr.length > 0 ? (
          <div className="project-img-cont">
            {picsArr.slice(0, 2).map((token) => (
              <Image
                className="project-img"
                src={token.split("[")[0].split("{")[1]}
                key={token}
                width={250}
                height={250}
                alt={token.split("[")[1]}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        <div>
          <a className="outline-link" href={link} target="_blank">
            Read the full blog &#8594;
          </a>
        </div>
      </section>
    </>
  );
}
