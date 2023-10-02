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
      <section>
        <h2>Summary</h2>
        <div>
          <img src={memoryIcon} />
          <p className='text-orangey-yellow font-bold'>Memory</p>
          <p>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div>
          <img src={reactionIcon} />
          <p className='text-light-red font-bold'>Reaction</p>
          <p>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div>
          <img src={verbalIcon} />
          <p className='text-green-teal font-bold'>Verbal</p>
          <p>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <div>
          <img src={visualIcon} />
          <p className='text-cobalt-blue font-bold'>Visual</p>
          <p>
            <span>72</span>
            <span>/</span>
            <span>100</span>
          </p>
        </div>
        <button>Continue</button>
      </section>
    </article>
  );
}

export default App;
