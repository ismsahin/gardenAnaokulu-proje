import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const TfCounter = ({ nonst }) => {
  return (
    <section
      
    ></section>
  );
};
export default TfCounter;
