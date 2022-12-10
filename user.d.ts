interface ICardProps {
  title: string;
  text: string;
  color: string;
  /*
  TODO: I don't know the correct type for an imported image. Replace any with the correct type
   */
  img: any;
  className?: string;
  children?: React.ReactNode;
}
