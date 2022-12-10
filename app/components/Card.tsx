import Image from "next/image";

const Card = ({ className, children, title, text, color, img }: ICardProps) => {
  let hoverColorButton = ` hover:text-${color}`;

  return (
    <>
      <div className={className + " bg-" + color}>
        <div>
          <Image src={img} alt={title} />
        </div>
        <div
          className={
            "font-big-shoulders-display text-4xl font-bold uppercase text-white text-very-light-gray"
          }
        >
          {title}
        </div>
        <div className={"mb-[7vh] font-lexend text-sm text-transparent-white"}>
          {text}
        </div>
        <div>
          <button
            className={
              "rounded-full border-2 border-transparent-white py-2 px-6 text-sm text-very-light-gray hover:bg-white" +
              hoverColorButton
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
