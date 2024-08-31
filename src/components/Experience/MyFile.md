
@import "../../vars.css";

.containerr{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 20%;
    margin-right: 20%;
}
.experinceTitle{
    margin-bottom: 20px;
}
.content{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
   
    
    
}
.experinceContentIcons{
   
    margin-right: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 50px; /* Space between grid items */
    justify-items: center; /* Centers items horizontally */
 
    text-align: center;
    margin-top: -10px;
  
   
}
.experinceContentIcon{
    position: relative;
    margin-right: 10px;
}
.experinceContentIcon img {
   width: 80px;
    height: 80px;
    position: relative; /* Ensure it is positioned above the circle */
    z-index: 2;

}
.experinceContentIcon::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px; /* Diameter of the circle */
    height: 80px; /* Diameter of the circle */
    background-color: #e9e5d2; /* Circle color, adjust as needed */
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    margin-top: -20px;
}
.experinceContentIcon p {
    margin-top: 10px;
    font-size: 14px;
   
}
.experinceItems{
    display: flex;
 
    gap: 50px;
}

.experienceContentItems{
    display: flex;
    flex-direction: column;
    gap: 20px;
   

}
.experienceItem{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
}

.experienceItemTitle{
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.experienceItem li {
    /* Add your styles here */
     /* Removes the default bullet points */
    margin-bottom: 8px; /* Adds some space between list items */
     /* Sets the text color */
    font-size: 16px; /* Adjusts the font size */
    margin-left: 15px; 
    margin-top: 8px;
}

.experienceItemImg{
    width: 60px;
    height:60px;
    border-radius: 50%;
   margin-top: 5px;
}

@media screen and (max-width: 1524px) {
    .content{
        flex-direction: column;
    }

    .experinceContentIcons{
        gap: 30px;
    }
    .experienceContentItems{
        margin-top: 50px;
    }

}

@media  screen and (max-width: 546px) {
   
    .experinceContentIcons{
        grid-template-columns: repeat(2, 1fr); /* 3 columns */
    }
}
 