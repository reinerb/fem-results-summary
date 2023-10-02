import memoryIcon from './assets/images/icon-memory.svg';
import reactionIcon from './assets/images/icon-reaction.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-visual.svg';
import PropTypes from 'prop-types';

ResultsSummary.propTypes = {
  reaction: PropTypes.number,
  memory: PropTypes.number,
  verbal: PropTypes.number,
  visual: PropTypes.number,
  position: PropTypes.number,
};

function ResultsSummary({
  reaction = 80,
  memory = 92,
  verbal = 61,
  visual = 72,
  position = 65,
}) {
  return (
    <main className='md:grid md:grid-cols-2 md:max-w-xl md:shadow-2xl md:rounded-2xl md:overflow-hidden'>
      <section className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue flex flex-col items-center pt-4 pb-8 px-8 rounded-b-2xl gap-4 md:rounded-t-2xl md:justify-center md:gap-8 md:px-12'>
        <h1 className='text-light-lavender font-bold'>Your Result</h1>
        <div className='text-light-lavender text-sm flex flex-col items-center px-10 py-8 rounded-full gap-2 bg-gradient-to-b from-violet-blue to-persian-blue'>
          <span className='font-extrabold text-5xl text-white'>
            {Math.floor((reaction + memory + verbal + visual) / 4)}
          </span>
          <span className='text-light-lavender opacity-60'>of 100</span>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-white text-xl font-bold'>Great</p>
          <p className='text-sm text-center text-light-lavender'>
            You scored higher than {position}% of the people who have taken
            these tests.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-3 p-6 flex-shrink-0 md:p-8'>
        <h2 className='font-bold mb-1 md:text-lg'>Summary</h2>
        <div className='category bg-light-red bg-opacity-5'>
          <img
            src={reactionIcon}
            alt='reaction icon'
          />
          <p className='text-light-red font-bold flex-grow'>Reaction</p>
          <p className='category__score'>
            <span>{reaction}</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div className='category bg-orangey-yellow bg-opacity-5'>
          <img
            src={memoryIcon}
            alt='memory icon'
          />
          <p className='text-orangey-yellow font-bold flex-grow'>Memory</p>
          <p className='category__score'>
            <span>{memory}</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div className='category bg-green-teal bg-opacity-5'>
          <img
            src={verbalIcon}
            alt='verbal icon'
          />
          <p className='text-green-teal font-bold flex-grow'>Verbal</p>
          <p className='category__score'>
            <span>{verbal}</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div className='category bg-cobalt-blue bg-opacity-5'>
          <img
            src={visualIcon}
            alt='visual icon'
          />
          <p className='text-cobalt-blue font-bold flex-grow'>Visual</p>
          <p className='category__score'>
            <span>{visual}</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <button className='text-white bg-dark-gray-blue rounded-full p-3 mt-2 text-sm font-bold hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue'>
          Continue
        </button>
      </section>
    </main>
  );
}

export default ResultsSummary;
