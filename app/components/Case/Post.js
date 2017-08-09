import React from 'react';
import PropTypes from 'prop-types';
import styles from './Case.scss';
import htmlToText from 'app/common/parser';


export class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            hidden: true,
        };
    }

    toggleHidden = () => {
        const {hidden} = this.state;
        this.setState({hidden: !hidden});
    }

    renderMatch = ({name, score}) => {
        if (score === 0) {
            return null;
        }

        let rule = '';
        if (name === 'uses_nontrackable_payment') {
            rule = 'Non-trackable payment';
        }
        else if (name === 'multiple_advertisements_single_day') {
            rule = 'Multiple advertisements in one day';
        }
        else if (name === 'user_recently_created') {
            rule = 'New user';
        }
        else if (name === 'is_different_user_same_phone') {
            rule = 'Different user has same phone';
        }
        else if (name === 'is_address_abroad') {
            rule = 'International address';
        }
        else if (name === 'is_high_activity') {
            rule = 'High user activity';
        }
        else if (name === 'very_high_price') {
            rule = 'Listing has high price';
        }
        else if (name === 'is_company') {
            rule = 'Company';
        }
        else if (name === 'is_malafide') {
            rule = 'User is malafide';
        }
        return (
            <tr>
                <td>{rule}</td>
                <td>{score}%</td>
            </tr>
        );
    }

    render() {
        const {title, photos, description, city, price, suspiscious_score, user, matches, url} = this.props;
        const src = photos[0];
        const descriptionText = htmlToText(description);
        return (
            <div id="advertisement-id1" className={styles.boxEffectShowmore} onClick={this.toggleHidden}>
                <table className={styles.advertisement}>
                    <tbody>
                        <tr>
                            <td className={styles.score}><span>{suspiscious_score * 100}%</span></td>
                            <td className={styles.title}>{title}</td>
                            <td><a href={url}><img src={src} width="100" /></a></td>
                        </tr>
                    </tbody>
                </table>
                <div id="advertisement-details-id1" className={this.state.hidden ? styles.hidden : ''}>
                    <h3>What triggered this alert?</h3>
                    <table className={styles.rules}>
                        <tbody>
                            {matches.map(({name, score}) => {
                                return this.renderMatch({name, score});
                            })}
                        </tbody>
                    </table>

                    <h3>More about this advertisement</h3>
                    <div className={styles.advertisementDetails}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><a href={user.url}>{user.name}</a></td>
                                    <td>&euro; {price}</td>
                                    <td>{city}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.description}>{descriptionText}
                        </div>
                    </div>
                    <div className={styles.breaker}>&nbsp;</div>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
};
