import Card from "./components/Card";

import iconSuvs from "../public/icon-suvs.svg";
import iconSedans from "../public/icon-sedans.svg";
import iconLuxury from "../public/icon-luxury.svg";

export default function Home() {
  const template: ICardProps[] = [
    {
      title: "sedans",
      text:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city \n" +
        "  or on your next road trip.",
      color: "bright-orange",
      img: iconSedans,
    },
    {
      title: "suvs",
      text:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation \n" +
        "  and off-road adventures.",
      color: "dark-cyan",
      img: iconSuvs,
    },
    {
      title: "luxury",
      text:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury \n" +
        "  rental and arrive in style.",
      color: "very-dark-cyan",
      img: iconLuxury,
    },
  ];

  return (
    <div
      className={
        "my-16 flex flex-col items-center justify-start font-lexend sm:h-[100vh] sm:justify-center"
      }
    >
      <div
        className={
          "flex w-[85vw] flex-col overflow-hidden rounded-xl sm:w-[65vw] sm:flex-row "
        }
      >
        {template.map((t) => {
          return (
            <Card
              className={"flex w-full flex-col gap-7 p-12 sm:w-1/3"}
              key={t.title}
              title={t.title}
              text={t.text}
              color={t.color}
              img={t.img}
            />
          );
        })}
      </div>
    </div>
  );
}
