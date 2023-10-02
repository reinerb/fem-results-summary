import memoryIcon from './assets/images/icon-memory.svg';
import reactionIcon from './assets/images/icon-reaction.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-Visual.svg';

function App() {
  return (
    <article>
      <section className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue flex flex-col items-center pt-4 pb-8 px-8 rounded-b-2xl gap-4'>
        <h1 className='text-light-lavender font-bold'>Your Result</h1>
        <div className='text-light-lavender text-sm flex flex-col items-center px-10 py-8 rounded-full gap-2 bg-gradient-to-b from-violet-blue to-persian-blue'>
          <span className='font-extrabold text-5xl text-white'>76</span>
          <span className='text-light-lavender opacity-60'>of 100</span>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-white text-xl font-bold'>Great</p>
          <p className='text-sm text-center text-light-lavender'>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-3 p-6'>
        <h2 className='font-bold mb-1'>Summary</h2>
        <div className='category bg-light-red bg-opacity-5'>
          <img src={reactionIcon} />
          <p className='text-light-red font-bold flex-grow'>Reaction</p>
          <p className='category__score'>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div className='category bg-orangey-yellow bg-opacity-5'>
          <img src={memoryIcon} />
          <p className='text-orangey-yellow font-bold flex-grow'>Memory</p>
          <p className='category__score'>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div className='category bg-green-teal bg-opacity-5'>
          <img src={verbalIcon} />
          <p className='text-green-teal font-bold flex-grow'>Verbal</p>
          <p className='category__score'>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div className='category bg-cobalt-blue bg-opacity-5'>
          <img src={visualIcon} />
          <p className='text-cobalt-blue font-bold flex-grow'>Visual</p>
          <p className='category__score'>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <button className='text-white bg-dark-gray-blue rounded-full p-3 mt-2'>
          Continue
        </button>
      </section>
    </article>
  );
}

export default App;
