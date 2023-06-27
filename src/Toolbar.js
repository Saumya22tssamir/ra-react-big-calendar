import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from './utils/constants'

class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.TODAY)}
            class="Today"
          >
            <span class="Today-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1536 128h384v1792h-768v-128h640V640H128v1152h640v128H0V128h384V0h128v128h896V0h128v128zM128 512h1664V256h-256v128h-128V256H512v128H384V256H128v256zm1059 1149l-163-162v549H896v-549l-163 162-90-90 317-317 317 317-90 90zm-35-893v384H768V768h384zm-128 256V896H896v128h128z" />
              </svg>
            </span>
            <span class="Today-text">Today</span>
          </button>

          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            <span class="chevron-prev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M555 1024q0-18 12-30l725-726q12-12 31-12 18 0 30 12t12 30q0 19-12 31l-695 695 695 695q12 12 12 30t-12 30-30 13q-19 0-31-12l-725-726q-12-12-12-30z" />
              </svg>
            </span>
          </button>
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <span class="chevron-next">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M683 1749q0-18 12-30l695-695-695-695q-12-12-12-31 0-18 12-30t31-12q18 0 30 12l725 726q12 12 12 30t-12 30l-725 726q-12 12-30 12-19 0-31-12t-12-31z" />
              </svg>
            </span>
          </button>
        </span>

        <span className="rbc-toolbar-label">
          {label}
          <span class="label-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M1939 467l90 90-1005 1005L19 557l90-90 915 915 915-915z" />
            </svg>
          </span>
        </span>

        <span className="rbc-btn-group">
          <span class="month-left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M768 768h128v128H768V768zm384 768h128v128h-128v-128zm384-768h128v128h-128V768zm-384 0h128v128h-128V768zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zm1152 0h128v128h-128v-128zm-384 0h128v128h-128v-128zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zm1152 0h128v128h-128v-128zm-384 0h128v128h-128v-128zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zM2048 128v1792H0V128h384V0h128v128h1024V0h128v128h384zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256H128zm1792 1536V640H128v1152h1792z" />
            </svg>
          </span>
          {this.viewNamesGroup(messages)}
          <span class="month-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M1939 467l90 90-1005 1005L19 557l90-90 915 915 915-915z" />
            </svg>
          </span>
          <span class="CalSetting">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M2048 128v1064q-57-62-128-107V640H128v1152h898q11 34 25 66t34 62H0V128h384V0h128v128h1024V0h128v128h384zm-128 128h-256v128h-128V256H512v128H384V256H128v256h1792V256zM896 1408H768v-128h128v128zm256-384h128v61q-47 30-88 67h-40v-128zm128-128h-128V768h128v128zm384 0h-128V768h128v128zM512 1408H384v-128h128v128zm-128 128h128v128H384v-128zm128-384H384v-128h128v128zm384-256H768V768h128v128zm-128 640h128v128H768v-128zm128-384H768v-128h128v128zm1142 336l-124 51q6 30 6 61t-6 61l124 51-49 119-124-52q-35 51-86 86l52 124-119 49-51-124q-30 6-61 6t-61-6l-51 124-119-49 52-124q-51-35-86-86l-124 52-49-119 124-51q-6-30-6-61t6-61l-124-51 49-119 124 52q35-51 86-86l-52-124 119-49 51 124q30-6 61-6t61 6l51-124 119 49-52 124q51 35 86 86l124-52 49 119zm-438 304q40 0 75-15t61-41 41-61 15-75q0-40-15-75t-41-61-61-41-75-15q-40 0-75 15t-61 41-41 61-15 75q0 40 15 75t41 61 61 41 75 15z" />
            </svg>
          </span>
        </span>
      </div>
    )
  }

  navigate = (action) => {
    this.props.onNavigate(action)
  }

  view = (view) => {
    this.props.onView(view)
  }

  /*viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map((name) => (
        <button
          type="button"
          key={name}
          className={clsx({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }*/
  viewNamesGroup(messages) {
    const { view } = this.props

    // Render buttons only for the "month" view
    if (view === 'month') {
      return (
        <button
          type="button"
          className="rbc-active"
          onClick={this.view.bind(null, 'month')}
        >
          {messages.month}
        </button>
      )
    }

    return null // Don't render buttons for other views
  }
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
}

export default Toolbar
