import React from 'react';

export default class FaqIcons extends React.Component {

    render() {
        switch(this.props.icon) {
            case 'guides':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={this.props.width} height={this.props.height} fill="#2B2B2B">
                            <path d="m18.677 23.994c-.974 0-2.102-.308-3.398-.923-1.447-.686-2.145-.658-2.604-.64-.374.016-.758.03-1.14-.352-.134-.134-.743-.864.454-2.061.597-.597 1.416-.769 2.127-.779l-4.146-4.146c-.567-.567-.566-1.491.003-2.06.568-.568 1.492-.571 2.06-.003l1.724 1.723c.068-.136.159-.263.272-.376.395-.396.961-.517 1.462-.363.07-.198.185-.384.343-.542.275-.275.641-.427 1.029-.428h.003c.353 0 .686.124.949.353.068-.137.16-.266.274-.38.568-.568 1.492-.569 2.06-.003l2.7 2.701c1.694 1.694 1.507 4.148-.458 6.115l-1.132 1.132c-.698.689-1.554 1.032-2.582 1.032zm-5.731-2.57c.546 0 1.386.09 2.762.744 2.985 1.416 4.195.727 4.847.085l1.126-1.126s.001-.001.001-.001c1.192-1.194 2.026-3.137.468-4.695l-2.708-2.708c-.177-.177-.467-.175-.645.003-.178.178-.18.466-.004.644l.676.676c.098.098.146.226.146.354s-.049.256-.146.354c-.195.195-.512.195-.707 0l-1.575-1.575c-.085-.085-.199-.132-.32-.132 0 0 0 0-.001 0-.122 0-.237.048-.324.135-.179.179-.18.468-.003.646l1.125 1.125c.098.098.146.226.146.354s-.049.256-.146.354c-.195.195-.512.195-.707 0l-1.575-1.575c-.177-.177-.466-.176-.646.002-.179.179-.18.468-.003.646l1.125 1.125c.098.098.146.226.146.354s-.049.256-.146.354c-.195.195-.512.195-.707 0l-3.825-3.825c-.177-.177-.467-.174-.646.003-.179.179-.18.468-.003.646l5.175 5.175c.162.162.193.412.076.608s-.353.289-.571.225c-.019-.005-1.811-.52-2.662.331-.387.387-.444.625-.434.679.042.029.051.039.373.027.094-.007.197-.012.312-.012zm5.498-8.052h.01z"/>
                            <path d="m1.5 20.724c-.34 0-.668-.114-.937-.33-.358-.287-.563-.715-.563-1.174v-16.11c0-.561.324-1.086.826-1.337 4.777-2.406 8.343-2.393 11.174.052 2.832-2.445 6.397-2.457 11.175-.051.501.25.825.775.825 1.336v9.39c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-9.39c0-.186-.107-.359-.273-.442-4.546-2.29-7.844-2.229-10.381.194-.193.185-.497.185-.69 0-2.539-2.423-5.837-2.484-10.381-.195-.168.083-.275.257-.275.443v16.11c0 .154.069.297.188.394.07.056.219.143.424.098 2.992-.707 5.497-.889 7.654-.556.273.042.46.297.418.57s-.299.459-.57.418c-2.026-.311-4.407-.134-7.279.543-.112.024-.224.037-.335.037z"/>
                            <path d="m12 11c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5s.5.224.5.5v8c0 .276-.224.5-.5.5z"/>
                        </svg>
            case 'pricing':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.4 338.4" width={this.props.width} height={this.props.height} fill="#2B2B2B">
                            <path d="m233.8 224.8h-127.28c-2.576 0.422-4.595 2.441-5.017 5.017-0.543 3.314 1.703 6.44 5.017 6.983h127.28c0.651 0.107 1.315 0.107 1.966 0 3.314-0.543 5.56-3.669 5.017-6.983s-3.669-5.56-6.983-5.017z"/>
                            <path d="m233.8 101.76h-127.28c-2.576 0.422-4.595 2.441-5.017 5.017-0.543 3.314 1.703 6.44 5.017 6.983h127.28c0.651 0.107 1.315 0.107 1.966 0 3.314-0.543 5.56-3.669 5.017-6.983s-3.669-5.56-6.983-5.017z"/>
                            <path d="m233.8 194.04h-127.28c-2.576 0.422-4.595 2.441-5.017 5.017-0.543 3.314 1.703 6.44 5.017 6.983h127.28c0.651 0.107 1.315 0.107 1.966 0 3.314-0.543 5.56-3.669 5.017-6.983s-3.669-5.56-6.983-5.017z"/>
                            <path d="m231.32 1.88c-1.145-1.177-2.718-1.841-4.36-1.84h-159.2v-0.04c-15.83 0.022-28.658 12.85-28.68 28.68v281.04c0.022 15.83 12.85 28.658 28.68 28.68h202.88c15.83-0.022 28.658-12.85 28.68-28.68v-239.84l-68-68zm1.72 18.96 47.4 47.4h-34.64c-7.029-0.044-12.716-5.731-12.76-12.76v-34.64zm56 288.88c-0.044 9.083-7.397 16.436-16.48 16.48h-204.8c-9.083-0.044-16.436-7.397-16.48-16.48v-281.04c0.044-9.083 7.397-16.436 16.48-16.48h153.08v43.08c0.022 13.776 11.184 24.938 24.96 24.96h43.24v229.48z"/>
                            <path d="m233.8 132.52h-127.28c-0.651-0.107-1.315-0.107-1.966 0-3.314 0.543-5.56 3.669-5.017 6.983s3.669 5.56 6.983 5.017h127.28c0.651 0.107 1.315 0.107 1.966 0 3.314-0.543 5.56-3.669 5.017-6.983s-3.669-5.56-6.983-5.017z"/>
                            <path d="m233.8 163.28h-127.28c-2.576 0.422-4.595 2.441-5.017 5.017-0.543 3.314 1.703 6.44 5.017 6.983h127.28c0.651 0.107 1.315 0.107 1.966 0 3.314-0.543 5.56-3.669 5.017-6.983s-3.669-5.56-6.983-5.017z"/>
                        </svg>
            case 'account':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.323 513.323" width={this.props.width} height={this.props.height} fill="#2B2B2B">
                            <path d="M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667    s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667    c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z" />
                            <path d="M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333    S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96    S309.589,213.333,256.661,213.333z" />
                        </svg>
        }   
    }
}