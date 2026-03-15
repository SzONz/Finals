import './stories.css'
import SCard from './card'

function Stories({ data }) {
  return (
    <section className='stories'>
      <h3>Featured Stories</h3>

      <div className="s-card-container">
        {data.map(item => (
          <SCard
            key={item.id}
            title={item.title}
            image={item.image}
            info={item.info}
          />
        ))}
      </div>

    </section>
  );
}

export default Stories;