import React from "react";
import classes from './eventCard.module.css';
import EventCardsParagraph from "./EventCardsParagraph";
import Badge from "react-bootstrap/Badge";
const EventCards = () => {
    const array = [
        {
            id:1
        }, {
            id:2
        }
    ];
    const badge = [
        {
            id:1
        }, {
            id:2
        } ,{
            id:3
        }, {
            id:4
        },
        {
            id:5
        }, {
            id:6
        } ,{
            id:7
        }, {
            id:8
        },
        {
            id:9
        }, {
            id:10
        } ,{
            id:11
        }
    ];
    return (
        <>

            {array.map(data => (

                <main className={classes.main}>

                    <div className={classes.left}>
                        <div className={classes.date}>
                            Thursday, 8 December 2022
                        </div>
                        <div className={classes.paragraph}>
                           <EventCardsParagraph>Agra</EventCardsParagraph>
                        </div>
                        <div className={classes.title}>
                            Agra
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>
                            <img src="https://e1.pxfuel.com/desktop-wallpaper/124/761/desktop-wallpaper-taj-mahal-agra-india-taj-mahal-at-night-3d-thumbnail.jpg" alt="tajmahal" className={classes['right-img']} />
                        </div>
                    </div>
                </main>
                ))}
            <main className={classes.badgeMain}>
                {badge.map(badge => (
                    <Badge bg="dark" style={{margin:"0px 5px"}}>
                        #Dark
                    </Badge>
                ))}
            </main>
            </>
    );
}
export default EventCards;