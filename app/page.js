import Image from "next/image";
import "./styles.scss";
import "./page.css";

export default function Home() {
  return (
    <div id="pageContainer">
      <div id="title">
        <bold>Lorem ipsum dolor sit amet</bold>
      </div>
      <div id="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
        leo non lorem tincidunt rhoncus. Donec non cursus neque, at cursus
        sapien. Quisque vestibulum
      </div>
      <button className="button" id="btn">
        Hello
      </button>
      <div id="content-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
        leo non lorem tincidunt rhoncus. Donec non cursus neque, at cursus
        sapien. Quisque vestibulum ultricies sem vel mattis. Aenean sem lacus,
        mattis in interdum et, pellentesque a justo. Vestibulum fringilla enim
        nec feugiat scelerisque. Mauris eget gravida elit. Quisque at
        ullamcorper leo, sed vulputate risus. Morbi blandit porta velit,
        consectetur faucibus tortor fermentum eget. Phasellus ac odio vitae
        risus dictum tincidunt at eu ante. Vestibulum ut sapien at nunc
        efficitur finibus in at turpis. Nullam eget diam ac risus vehicula
        tincidunt at ut risus. Mauris laoreet laoreet porttitor. Nulla facilisi.
        Nunc pulvinar, dolor id tincidunt ultrices, risus ex sodales elit, sit
        amet faucibus quam velit eu velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Vestibulum porttitor convallis rhoncus.
        Morbi sapien metus, bibendum at elementum vel, blandit in odio. Maecenas
        convallis mattis diam, vitae sollicitudin purus bibendum eu. Donec ut
        pulvinar magna. Integer pellentesque et dolor sed tincidunt. Nullam
        posuere dictum nisi, sit amet consequat lacus pharetra at. Maecenas nec
        mattis purus. Sed at purus orci. In molestie vehicula orci malesuada
        congue. Vestibulum fermentum, lectus in suscipit volutpat, massa nisi
        sollicitudin nulla, at finibus dui mauris nec felis. Vestibulum volutpat
        neque sodales felis tristique, nec condimentum arcu auctor. Aliquam non
        ligula a ex tempor aliquet. Praesent suscipit feugiat ultricies. Donec a
        felis et lorem placerat lacinia. Nunc gravida sagittis quam id accumsan.
        Nulla quis sagittis eros. Cras ac mauris ullamcorper, maximus magna a,
        dapibus turpis. Ut semper diam ut scelerisque fringilla. Mauris blandit
        tempus volutpat. Proin ac felis dolor. Nunc tincidunt nunc id rhoncus
        hendrerit. Nullam tempor erat a ante dapibus, non pellentesque massa
        condimentum. Vivamus fringilla sagittis nunc ut pulvinar. Duis luctus
        tempor arcu, vitae accumsan metus cursus ac. Vivamus volutpat et dolor
        ac cursus. Integer tincidunt dolor ac porttitor posuere. Phasellus
        maximus maximus arcu, sit amet pulvinar tellus maximus accumsan. Aenean
        dapibus suscipit orci, nec accumsan metus malesuada vel. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </div>
      <div id="content-2"></div>
      {/* <button className="button is-primary">Hello</button> */}
    </div>
  );
}
