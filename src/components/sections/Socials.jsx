import Card from '../ui/Card';
import { SOCIAL_LINKS } from '../../data/content';

const Socials = ({ className }) => {
  return (
    <Card className={`${className} flex items-center justify-around bg-white`}>
      {SOCIAL_LINKS.map((social) => (
        <a 
          key={social.name}
          href={social.url} 
          className={`flex items-center gap-2 hover:text-white px-3 py-1 border-2 border-transparent hover:border-black transition-all ${social.hoverColor}`}
        >
          <social.icon size={20} /> 
          <span className="font-bold hidden sm:inline">{social.name}</span>
        </a>
      ))}
    </Card>
  );
};

export default Socials;