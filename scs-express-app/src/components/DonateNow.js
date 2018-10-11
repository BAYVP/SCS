
import React, { Component } from 'react';
import '../index.css';
import eventBackgroundImg from './images/donate_bg.jpg';

class DonateNow extends Component {

  render() {
    return (
        <div>
			<section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${eventBackgroundImg})`}}>
				<div className="xs-black-overlay"></div>
				<div className="container">
					<div className="color-white xs-inner-banner-content">
						<h2>Donate Now</h2>
						<p>Need content here for donate now page.</p>
						<ul className="xs-breadcumb">
							<li className="badge badge-pill badge-primary"><a href="index.html" className="color-white"> Home /</a> Donate</li>
						</ul>
					</div>
				</div>
			</section>

			<main className="xs-main">
				<section className="xs-what-we-do-box">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="xs-service-promo box-color bg-purple">
								<span className="icon-open-book"></span>
								<h5>Shreemay Vidya Mandir</h5>
								<p>The goal is to prepare well-balanced, competent, and compassionate citizens from needy socio-economic backgrounds who can be proud of their skills, culture, history and heritage and who can build a brighter future for themselves and for society.</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="xs-service-promo box-color bg-light-red">
								<span className="icon-family"></span>
								<h5>Nikunj Yuva Seva</h5>
								<p>Nikunj Yuva Seva is a youth or teen volunteer and leadership program offered by Shreemay Community Services to provide a forum for teenagers to earn college and high school required community service hours while learning the meaning of Seva – service.</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="xs-service-promo box-color bg-blue">
								<span className="icon-heartbeat"></span>
								<h5>Shreemay Senior Center</h5>
								<p>The Shreemay Senior Center recognizes that all seniors still have a desire to remain independent in society.The mission is to provide members 55 years of age and over with an opportunity to participate and enjoy all aspects of the community</p>
							</div>
						</div>
						
					</div>
				</div>
			</section>		
			<section className="xs-section-padding bg-gray">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="xs-donation-form-images">
								<img src="assets/images/family.jpg" className="img-responsive" alt="Family Images"></img>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="xs-donation-form-wraper" >
								<div className="xs-heading xs-mb-30">
									<h2 className="xs-title">Make a donation</h2>
									<p className="small">Shreemay community services is a <b>501(c)3</b>.Your donation is tax exempt within the limits of the law.Shreemay community services seeks the support of foundations, corporations and individuals interested in creating a platform to promote humanitarian, educational, cultural, social and spiritual activities.</p>
								</div>
								<div className="xs-navs-button d-flex-center-end col-lg-5">
                                	<a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=N66FMVUXQE65G" className="btn btn-primary">
                                		<span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                                	</a>
                            	</div>
								<br></br><br></br>
								<span className="xs-separetor v2"></span>
								<div className="xs-heading xs-mb-20">
									<h2 className="xs-title">Send a check</h2>
									<p className="small">If you want you can also send us your donations via check to following:</p>
									<span>Shreemay Community Services</span><br></br>
									<span>25 Corning Avenue</span><br></br>
									<span>Milpitas, CA 95035</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="xs-section-padding bg-white">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="xs-donation-form-wraper" >
								<div className="xs-heading xs-mb-30">
									<h3 className="xs-title">Employer Matching</h3>
									<p className="small">An easy way to <b>double</b> your contribution is through employee giving programs. Many corporations match employee donations (or the tax deductible component of your membership) to our organization. If you volunteer with us, your employer may also provide us with a grant as a way to recognize your ongoing support. </p>
									<p className="small">If you need any support for company matching please contact us at:</p>
									<span>info@shreemaycommunoty.com</span><br></br>
									<span>(408)-123-4567</span><br></br>
									<span>EIN: 1231312312312321</span><br></br>
									
									<p className="small"><br/>Thanks for checking to see if your company offers these programs!.</p>
									<span className="xs-separetor v2"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="xs-donation-form-wraper" >
								<div className="xs-heading xs-mb-30">
									<h2 className="xs-title">Current Corporate Contributors</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<img className="img-responsive" alt="" src="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/files/images/wmrc/VMware_logo_gry_RGB_300dpi.jpg" />
						</div>
						<div className="col-md-3">
							<img className="img-responsive" alt="" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png" />
						</div>
						
					</div>
				</div>
			</section>
			</main>
		</div>
    );
  }
}

export default DonateNow;