import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToyRow = ({toys}) => {
    AOS.init();

    const {photo, title, _id, email, subCategory, price, userName, quantity} = toys;
    return (
        <tr data-aos="zoom-in-up">
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{userName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {title}
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>{subCategory}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <th>
                        <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                        </th>
                    </tr>
    );
};

export default ToyRow;