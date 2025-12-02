import { Code } from 'lucide-react';
import Card from '../ui/Card';
import { PROJECTS } from '../../data/content';

const Projects = ({ className }) => {
  return (
    <Card className={`${className} flex flex-col gap-0 p-0 overflow-hidden bg-[#ff99c8]`}>
      <div className="bg-black text-white px-4 py-2 font-black uppercase flex justify-between items-center h-[40px] shrink-0">
        <span>Selected Projects</span>
        <Code size={16} />
      </div>
      
      <div className="flex flex-col h-full divide-y-2 divide-black">
        {PROJECTS.map((proj, idx) => (
          <div 
            key={idx}
            className="flex-1 flex flex-col justify-center p-4 bg-white transition-all gap-1 cursor-pointer hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-base leading-none">{proj.title}</h3>
              <proj.icon size={14} />
            </div>
            <p className="text-xs text-gray-600">{proj.desc}</p>
            <div className="flex gap-1 mt-1">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] border border-black px-1">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Projects;