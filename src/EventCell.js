import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'

class EventCell extends React.Component {
  render() {
    let {
      style,
      className,
      event,
      selected,
      isAllDay,
      onSelect,
      onDoubleClick,
      onKeyPress,
      localizer,
      continuesPrior,
      continuesAfter,
      accessors,
      getters,
      children,
      components: { event: Event, eventWrapper: EventWrapper },
      slotStart,
      slotEnd,
      ...props
    } = this.props
    delete props.resizable

    let title = accessors.title(event)
    let tooltip = accessors.tooltip(event)
    let end = accessors.end(event)
    let start = accessors.start(event)
    let allDay = accessors.allDay(event)

    let showAsAllDay =
      isAllDay ||
      allDay ||
      localizer.diff(start, localizer.ceil(end, 'day'), 'day') > 1

    let userProps = getters.eventProp(event, start, end, selected)

    const content = (
     // <div>
        // <div style={{width: '4px', height: '26px', borderRadius: '4px 0px 0px 4px' , background: '#00B7C3',display:'flex' }}>
        //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
          //  <path d="M2048 384v1280H0V384h2048z" />
          //</svg>
         //</div>
        
      <div className="rbc-event-content" title={tooltip || undefined} style={{fontSize:'10px',lineHeight:'12px'}}>
        {Event ? (
          <Event
            event={event}
            continuesPrior={continuesPrior}
            continuesAfter={continuesAfter}
            title={title}
            isAllDay={allDay}
            localizer={localizer}
            slotStart={slotStart}
            slotEnd={slotEnd}
          />
        ) : (
          title
        )}
      </div>
      //</div>
    )

    return (
      <EventWrapper {...this.props} type="date">
        <div
          {...props}
          tabIndex={0}
          style={{ ...userProps.style, ...style }}
          className={clsx('rbc-event', className, userProps.className, {
            'rbc-selected': selected,
            'rbc-event-allday': showAsAllDay,
            'rbc-event-continues-prior': continuesPrior,
            'rbc-event-continues-after': continuesAfter,
          })}
          onClick={(e) => onSelect && onSelect(event, e)}
          onDoubleClick={(e) => onDoubleClick && onDoubleClick(event, e)}
          onKeyPress={(e) => onKeyPress && onKeyPress(event, e)}
        >
          {typeof children === 'function' ? children(content) : content}
        </div>
      </EventWrapper>
    )
  }
}

EventCell.propTypes = {
  event: PropTypes.object.isRequired,
  slotStart: PropTypes.instanceOf(Date),
  slotEnd: PropTypes.instanceOf(Date),

  resizable: PropTypes.bool,
  selected: PropTypes.bool,
  isAllDay: PropTypes.bool,
  continuesPrior: PropTypes.bool,
  continuesAfter: PropTypes.bool,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object,

  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
}

export default EventCell
