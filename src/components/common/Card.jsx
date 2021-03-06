import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../table/Table'

function Card ({ headerTitle, tableData, limit }) {
	return (
		<div className="card">
			<div className="card__header">
				<h3>{ headerTitle }</h3>
			</div>
			<div className="card__body">
				<Table
					limit={limit}
					headData={tableData.head}
					bodyData={tableData.body}
				/>
			</div>
			<div className="card__footer">
				<Link to='/'>View all</Link>
			</div>
		</div>
	)
}

Card.propTypes = {
	headerTitle: PropTypes.string,
	tableData: PropTypes.shape({
		head: PropTypes.array,
		body: PropTypes.array,
	}),
	limit: PropTypes.number,
}

Card.defaultProps = {
	headerTitle: '',
	tableData: {},
	limit: null,
}

export default Card

