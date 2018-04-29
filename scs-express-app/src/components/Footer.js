
import React, { Component } from 'react';
import '../index.css';

class Footer extends Component {

  render() {
    return (
        <footer className="xs-footer-section">
					<div className="container">
						<div className="xs-footer-top-layer">
							<div className="row">
								<div className="col-lg-12 col-md-12 footer-widget">
									<h3 className="widget-title">Contact Us</h3>
									<ul className="xs-info-list">
										<li><i className="fa fa-home"></i>25 Corning Avenue, Milpitas, CA 95035</li>&nbsp;&nbsp;&nbsp;
										<li><i className="fa fa-phone"></i>(408)-586-0006</li>&nbsp;&nbsp;&nbsp;
										<li><i className="fa fa-envelope-o"></i><a href="mailto:info@bayvp.org">info@bayvp.org</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="xs-copyright">
							<div className="row">
								<div className="col-md-6">
									<div className="xs-copyright-text">
										<p>&copy; Copyright © 2018 Shreemaya Krishnadham – BAYVP - All Rights Reserved </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="xs-back-to-top-wraper">
						<a href="#" className="xs-back-to-top"><i className="fa fa-angle-up"></i></a>
					</div>
		</footer>
    );
  }
}

export default Footer;