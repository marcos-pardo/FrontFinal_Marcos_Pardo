import { FunctionComponent } from "preact";
import Logout from "../islands/Logout.tsx";

type Props = {
    userName: string;
};

const Header : FunctionComponent<Props> = ({ userName }) => {
    return(
        <header className="header-container">
            <div class="header-content">
                <span class="user-name">{userName}</span>
                <Logout/>
                </div>
        </header>

    )
}
export default Header;