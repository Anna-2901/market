import '../css/home.css';
import refs from '../js/refs.js';

// console.log(refs.home);
const { home } = refs;
// console.log(home);

const homeTitle = document.createElement("h2");
// console.log(homeTitle);

homeTitle.textContent = "HOUSE";
home.appendChild(homeTitle);

const homeContent = document.createElement("p");
let content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quaerat error eveniet voluptatem pariatur optio vel perspiciatis sed aperiam soluta. Esse reprehenderit similique ratione dolore voluptatibus? Ut, animi nisi voluptates ipsum voluptatum ratione ea, fugit nostrum impedit dolore temporibus accusamus possimus culpa quia minus, aperiam unde? Soluta eveniet minus ratione aperiam tenetur magni, eius corporis repellendus libero officiis nesciunt dolorem? Tempore odio veniam earum ullam? Impedit illum odit libero minima esse optio reprehenderit tempore eos, ex sapiente maiores id. Similique at aperiam dolorum sit rerum quaerat perspiciatis, doloremque qui dolorem quis repudiandae, est molestias minima molestiae minus. Doloribus ipsum exercitationem dignissimos asperiores nisi doloremque labore aliquam beatae velit eum quibusdam voluptatem dolores possimus cupiditate ut est, vitae ipsam, dicta quidem commodi molestias placeat esse. Corrupti ea dolore vel sit eveniet perferendis suscipit mollitia quaerat, sunt unde repellendus nam commodi, voluptate magni laborum animi repudiandae, asperiores accusamus! Natus facilis id provident nesciunt atque fugiat placeat vel molestias. Officia similique nihil excepturi voluptas harum soluta autem in aspernatur provident placeat sunt, est sint ullam laborum architecto neque cum, quidem hic reiciendis velit eligendi quia. Officiis nihil minima obcaecati sint quis. Accusantium necessitatibus dolorem sed, blanditiis explicabo itaque aperiam vitae debitis quia consequuntur.';
homeContent.textContent = content;
home.appendChild(homeContent);

