import React, {Fragment} from 'react';
import logo from './logo.png';
import './Pagination.css';

const Header = () => {

    return (
        <>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src={logo} ClassName="Imagen" alt="Compras online"></img>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                    
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='Buscar producto'></input>
                        <div class="input-group-append">
                            <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            <button class="btn btn-outline-success" type = "submit">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;