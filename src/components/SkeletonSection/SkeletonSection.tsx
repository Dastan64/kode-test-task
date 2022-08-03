import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styled from '../ProfileThumb/ProfileThumb.module.css';

const SkeletonSection = () => {
    return (
        <>
            <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Array(6)
                    .fill(6)
                    .map((item, index) => (
                        <article key={index} className={styled.profileThumb}>
                            <div className={styled.profileThumbContainer}>
                                <figure>
                                    <Skeleton circle={true} height={72} width={72}/>
                                </figure>
                                <div>
                                    <h4>
                                        <Skeleton width={174}/>
                                    </h4>
                                    <span>
                                  <Skeleton width={70}/>
                                </span>
                                </div>
                            </div>
                        </article>
                    ))}
            </ul>
        </>
    );
};

export default SkeletonSection;
