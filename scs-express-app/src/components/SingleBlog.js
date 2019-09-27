import React, {Component} from 'react';
import blogHeaderBackgroundImg from "./images/blog_details_header_bg.jpg";
import blogBackgroundImg from "./images/blog-bg.jpg";

class SingleBlog extends Component {
  render() {
    return (
      <div>
        <section className="xs-banner-inner-section parallax-window"
                 style={{backgroundImage: `url(${blogHeaderBackgroundImg})`}}>
          <div className="xs-black-overlay"></div>
          <div className="container">
            <div className="color-white xs-inner-banner-content">
              <h2>Blog Details</h2>
              <p>Blog title/one line description</p>
            </div>
          </div>
        </section>
        <main className="xs-main">
          <div className="xs-content-section-padding xs-blog-single">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <article className="post format-standard hentry xs-blog-post-details">
                    <div className="post-body xs-border xs-padding-40">
                      <div className="entry-header">
                        <div className="post-meta row">
                          <div className="col-md-2 xs-padding-0">
                            <span className="post-meta-date"><b>29</b> June</span>
                          </div>
                        </div>
                        <h2 className="entry-title xs-post-entry-title">
                          <a href="#">Creative Footprint - Support NYC's first ever NightCamp!</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Founded by berlin's clubcommissioner alongside amsterdam's with nightori mayor, the creative
                          footprint works with our partner Poor Advisor, local nyc scene experts and researchers to
                          gather data need for regular life. </p>

                        <p>Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface
                          of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner
                          sanctuary grow familiar with the countless indescribable forms of the insects and flies. </p>

                        <blockquote>
                          Welcome to MONTH #4 of my Song of the Month project! In case you missed months one three,
                          here's a little background on what I'm trying to do: I've released 6 albums list here
                          available.
                        </blockquote>

                        <p>Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface
                          of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner
                          sanctuary grow familiar with the countless indescribable forms of the insects and flies. </p>

                        <h3 className="entry-sub-title">Farm-to-table selfies labore leggings:</h3>

                        <ul className="xs-unorder-list play">
                          <li>Plaid fashion axe semiotics skateboard</li>
                          <li>Mixtape fap Intelligentsia small batch placeat labore</li>
                          <li>Gleams steal into the inner sanctuary grow</li>
                          <li>Like these sweet mornings of spring which</li>
                        </ul>

                      </div>


                      <div className="post-footer">
                        <div className="xs-post-footer xs-padding-40 xs-border">
                          <div className="clearfix"></div>
                        </div>
                        <div className="xs-author-block xs-padding-40 xs-border">
                          <div className="post-author">
                            <div className="xs-round-avatar float-left">
                              <img src="assets/images/avatar/avatar_7.jpg" alt="" className="img-responsive"/>
                            </div>

                            <div className="xs-post-author-details float-right">
                              <a href="#">Jhon William</a>
                              <em>
                                <i className="fa fa-map-marker color-green"></i>New York, USA
                              </em>
                            </div>
                            <div className="clearfix"></div>
                          </div>

                          <div className="post-content">
                            <p className="xs-mb-0">I love advice columns, always have. Growing up, I read “Dear Abby”
                              and “Ask Ann Landers.” I enjoyed the voyeurism — glimpses into the lives with hapy
                              family.</p>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <nav className="navigation post-navigation" role="navigation">
                          <div className="nav-links float-left w-50">
                            <a href="#" rel="prev" className="prev">
                              <h5>Crowdfunding resource</h5>
                              <span className="meta-nav"><i className="fa fa-angle-left"></i>Prev Post</span>
                            </a>
                          </div>

                          <div className="nav-links float-right w-50 text-right">
                            <a href="#" rel="next" className="next">
                              <h5>Funding means life</h5>
                              <span className="meta-nav">next Post<i className="fa fa-angle-right"></i></span>
                            </a>
                          </div>

                          <div className="clearfix"></div>
                        </nav>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default SingleBlog;