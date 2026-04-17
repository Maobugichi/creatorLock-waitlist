type FeatureCardProps = {
  icon: React.ElementType;
  title:string
};

const Card = ({ icon: Icon, title }:FeatureCardProps) => {
    return(
        <div className="relative">
            <div className="h-20 w-20 bg-[#FF5C00] absolute">
                 <Icon className="w-6 h-6 text-orange-500" />
            </div>
            <h2>
               {title}
            </h2>
            <p></p>
        </div>
    );
}