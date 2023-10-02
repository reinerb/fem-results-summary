import memoryIcon from './assets/images/icon-memory.svg';
import reactionIcon from './assets/images/icon-reaction.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-Visual.svg';

function App() {
  return (
    <article>
      <section>
        <h1>Your Result</h1>
        <div>
          <span className='font-extrabold text-6xl'>76</span>
          <span>of 100</span>
        </div>
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
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
