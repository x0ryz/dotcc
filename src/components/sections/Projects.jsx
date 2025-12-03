import { Code, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';
import { PROJECTS } from '../../data/content';

const Projects = ({ className }) => {
  return (
    <Card className={`${className} flex flex-col gap-0 p-0 overflow-hidden bg-[#ff99c8]`}>
      <div className="bg-black text-white px-4 py-2 font-black uppercase flex justify-between items-center h-[40px] shrink-0">
        <span>Selected Projects</span>
        <Code size={16} />
      </div>
      
      {/* Використовуємо h-full, щоб розтягнути контент */}
      <div className="flex flex-col h-full divide-y-2 divide-black bg-white">
        {PROJECTS.map((proj, idx) => (
          // flex-row дозволяє розмістити кнопки збоку
          <div key={idx} className="flex-1 flex flex-row h-full">
            
            {/* ЛІВА ЧАСТИНА: Контент (текст) */}
            <div className="flex-1 p-3 flex flex-col justify-center gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <proj.icon size={16} className="shrink-0" />
                <h3 className="font-bold text-sm sm:text-base leading-none truncate">{proj.title}</h3>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 leading-tight">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-1 mt-auto pt-1">
                {proj.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[9px] border border-black px-1 bg-gray-50 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ПРАВА ЧАСТИНА: Кнопки на всю висоту */}
            <div className="w-[50px] sm:w-[60px] flex flex-col border-l-2 border-black shrink-0">
              
              {/* Кнопка GitHub */}
              {proj.github ? (
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer bg-gray-50"
                  title="Code"
                >
                  <Github size={18} />
                </a>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-100 text-gray-300 cursor-not-allowed">
                   <Github size={18} />
                </div>
              )}

              {/* Кнопка Demo (Live) */}
              {proj.demo ? (
                <a 
                  href={proj.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center border-t-2 border-black hover:bg-[#7afcff] transition-colors cursor-pointer bg-white"
                  title="Live Demo"
                >
                  <ExternalLink size={18} />
                </a>
              ) : (
                // Якщо демо немає, показуємо заглушку або просто пусте місце
                <div className="flex-1 flex items-center justify-center border-t-2 border-black bg-gray-100 text-gray-300 cursor-not-allowed">
                  <ArrowUpRight size={18} />
                </div>
              )}
              
            </div>

          </div>
        ))}
      </div>
    </Card>
  );
};

export default Projects;