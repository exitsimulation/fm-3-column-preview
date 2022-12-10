/*
Counter the problem of tailwind.css purging classes when they are composed dynamically in React components
 */

const SafelistClasses = () => {
  return (
    <>
      <div
        className={
          "bg-bright-orange bg-dark-cyan bg-very-dark-cyan hover:bg-transparent-white hover:text-bright-orange hover:text-dark-cyan hover:text-very-dark-cyan"
        }
      ></div>
    </>
  );
};

export default SafelistClasses;
