/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

import React from 'react';
import PropTypes from 'prop-types';
import MediaObject from '../../../media-object';

const displayName = 'PageHeaderObjectHome';
const propTypes = {
	/**
	 * Content to appear on the right hand side of the page header
	 * 'contentRight' prop will be deprecated soon, instead use 'onRenderActions'
	 */
	contentRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	/**
	 * Icon node passed by PageHeader
	 */
	icon: PropTypes.node,
	/**
	 * Info node passed by PageHeader
	 */
	info: PropTypes.node,
	/**
	 * Heading above title
	 */
	label: PropTypes.node,
	/**
	 * Nav content which appears in the upper right hand corner.
	 * 'navRight' prop will be deprecated soon, instaed use 'onRenderControls'
	 */
	navRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	/**
	 * Title node passed by PageHeader
	 */
	title: PropTypes.node,
};

const ObjectHome = (props) => {
	return (
		<div>
			<div className="slds-grid">
				<div className="slds-col slds-has-flexi-truncate">
					<MediaObject
						body={
							<div>
								{props.label}
								{props.title}
							</div>
						}
						className="slds-no-space slds-grow"
						figure={props.icon}
					/>
				</div>
				<div className="slds-col slds-no-flex slds-grid slds-align-top slds-p-bottom_xx-small">
					{props.onRenderControls ? props.onRenderControls : props.navRight}
				</div>
			</div>
			<div className="slds-grid">
				<div className="slds-col slds-align-bottom">{props.info}</div>
				<div className="slds-col slds-no-flex slds-grid slds-align-bottom">
					{props.onRenderActions ? props.onRenderActions : props.contentRight}
				</div>
			</div>
		</div>
	);
};

ObjectHome.displayName = displayName;
ObjectHome.propTypes = propTypes;

export default ObjectHome;
