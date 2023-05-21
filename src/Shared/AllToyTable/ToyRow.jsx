
const ToyRow = ({toys}) => {
    const {photo, title, email, subCategory, price, userName, quantity, details} = toys;
    return (
        <tr>
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
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
    );
};

export default ToyRow;