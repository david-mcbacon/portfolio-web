import Logo from "./logo";

const TopNavigationLogo = () => {
  return (
    <div className="absolute left-4 top-4 z-50 scale-[80%] md:fixed md:left-14 md:top-14 md:scale-100">
      <Logo size="sm" />
    </div>
  );
};

export default TopNavigationLogo;
