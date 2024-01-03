interface PortfolioHeroProps {
  image: string;
}

const PortfolioHero = ({ image }: PortfolioHeroProps) => {
  return (
    <div className="portfolio-hero px-4 md:px-8 xl:px-40">
      <div
        className="image"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>
    </div>
  );
};

export default PortfolioHero;

