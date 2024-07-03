import React, { useEffect, useRef } from 'react';
import './Body.css'; // Import the CSS file for styling


function Body() {
  const animatedContainersRefs = useRef([]);
  const observerRef = useRef(null); // Ref to hold the IntersectionObserver instance

  useEffect(() => {
    // Function to initialize IntersectionObserver
    const initIntersectionObserver = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      // Start observing all refs in animatedContainersRefs
      animatedContainersRefs.current.forEach((ref) => {
        if (ref && observerRef.current) {
          observerRef.current.observe(ref);
        }
      });
    };

    // Initialize IntersectionObserver
    initIntersectionObserver();

    // Cleanup function
    return () => {
      // Unobserve all refs in animatedContainersRefs
      if (observerRef.current) {
        animatedContainersRefs.current.forEach((ref) => {
          if (ref) {
            observerRef.current.unobserve(ref);
          }
        });
      }
      // Cleanup observerRef.current
      observerRef.current = null;
    };
  }, []);

  return (
    <main className="body">
      <div className="webgl-section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%' }}
        >
          <source
            src={`${process.env.PUBLIC_URL}/videos/welcome.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="section">
          <div className="welcome-box">
            <h1>Welcome to Our Website</h1>
            <p>
              Discover a new way to experience digital content with our
              innovative platform. Whether you're looking to explore cutting-edge
              technology or simply unwind with captivating visuals, our website
              offers something for everyone.
            </p>
            <p>
              Technology encompasses a vast array of innovations that shape our
              modern world. From advancements in artificial intelligence (AI)
              and machine learning to the rapid evolution of mobile devices and
              the internet, technology continues to revolutionize industries and
              daily life. Emerging fields such as quantum computing, blockchain,
              and augmented reality promise even greater transformations in the
              near future.
            </p>
            <p>
              In the realm of AI, developments are pushing the boundaries of
              what machines can achieve, from natural language processing to
              autonomous systems. Machine learning algorithms are powering
              recommendation engines, personalized medicine, and predictive
              analytics, revolutionizing sectors like healthcare, finance, and
              transportation.
            </p>
            <p>
              Mobile technology has become ubiquitous, with smartphones serving
              as multifunctional tools for communication, entertainment, and
              productivity. The advent of 5G networks promises faster speeds and
              lower latency, enabling advancements in Internet of Things (IoT)
              applications and smart cities.
            </p>
            <p>
              Blockchain technology, known for its decentralized and secure
              nature, is disrupting industries like finance, supply chain
              management, and digital identity verification. Its potential
              extends beyond cryptocurrencies to areas such as voting systems
              and intellectual property protection.
            </p>
          </div>
          <div className="additional-containers">
            <div
              className="additional-container"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/img1.png)`,
              }}
            >
              <h2>Container 1</h2>
              <p>Content for container 1.</p>
            </div>
            <div
              className="additional-container"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/img1.png)`,
              }}
            >
              <h2>Container 2</h2>
              <p>Content for container 2.</p>
            </div>
            <div
              className="additional-container"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/img1.png)`,
              }}
            >
              <h2>Container 3</h2>
              <p>Content for container 3.</p>
            </div>
          </div>
          <div className="additional-info">
        <h2>Additional Information</h2>
        <div className="info-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum orci vel fermentum vestibulum.</p>
          <p>Nullam venenatis fermentum nibh, at convallis lacus. Ut id dui eget lectus lobortis malesuada non at elit.</p>
          <p>Integer at nisi nisi. Duis vel vestibulum dolor. Nulla facilisi.</p>
        </div>
      </div>
          <div className="artist-section" ref={(el) => (animatedContainersRefs.current[6] = el)}>
  <div className="artist-images">
    <img src={`${process.env.PUBLIC_URL}/image/img3.png`} alt="Artist working" />
  </div>
  <div className="artist-description">
    <h2>As an Artist</h2>
    <p>
      My goal is to help every brand come alive through design. In today's highly competitive digital space, it's important for online businesses to establish their presence as they would traditionally do in a retail space.
    </p>
  </div>
</div>

          <div className="content-layout">
            <div className="box-container" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/image/background.png')`}}>
           
              <div
                className="box box1"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/image/img2.png')`,
                }}
                ref={(el) => (animatedContainersRefs.current[0] = el)}
              >
                <h2>Box 1</h2>
                <p>Some content for box 1.</p>
              </div>
              <div
                className="box box2"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/image/img2.png')`,
                }}
                ref={(el) => (animatedContainersRefs.current[1] = el)}
              >
                <h2>Box 2</h2>
                <p>Some content for box 2.</p>
              </div>
              <div
                className="box box3"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/image/img2.png')`,
                }}
                ref={(el) => (animatedContainersRefs.current[2] = el)}
              >
                <h2>Box 3</h2>
                <p>Some content for box 3.</p>
              </div>
              <div
                className="box box4"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/image/img2.png')`,
                }}
                ref={(el) => (animatedContainersRefs.current[3] = el)}
              >
                <h2>Box 4</h2>
                <p>Some content for box 4.</p>
              </div>
              <div
                className="box box5"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/image/img2.png')`,
                }}
                ref={(el) => (animatedContainersRefs.current[4] = el)}
              >
                <h2>Box 5</h2>
                <p>Some content for box 5.</p>
              </div>
              <div
                className="box box6"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/image/img2.png')`,
                }}
                ref={(el) => (animatedContainersRefs.current[5] = el)}
              >
                <h2>Box 6</h2>
                <p>Some content for box 6.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-section">
          <video
            className="additional-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto' }}
          >
            <source
              src={`${process.env.PUBLIC_URL}/videos/webpage.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
    </main>
  );
}

export default Body;
