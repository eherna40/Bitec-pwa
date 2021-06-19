import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { motion } from 'framer-motion'

const Features = ({ data, selected, info }) => {
    const [state, setState] = useState([])

    useEffect(() => {
        setState([])
        setTimeout(() => {
            setState(data)
        }, 100);

    }, [data])

    return (

        <div className="Accesories tw-relative tw-h-full tw-p-5  ">
            {
                state.reverse().map((i, idx) => {
                    return (
                      <motion.div
                        className="tw-mb-6"
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: idx * 0.2,
                        }}
                      >
                        {Number(selected) === 1 ? (
                          <>
                            <div>
                              <Paragraphs
                                uppercase
                                family="extrabold"
                                size="xs"
                                className="tw-text-white"
                              >
                                {Number(selected) === 1
                                  ? i.name
                                  : i.name + " Unidad/es"}
                              </Paragraphs>
                            </div>
                            <div>
                              <Paragraphs
                                uppercase
                                size="sm"
                                className="tw-text-white"
                                family="universe"
                                italic
                              >
                                {i.value}
                              </Paragraphs>
                            </div>
                          </>
                        ) : (
                          <div>
                            <Paragraphs
                              uppercase
                              size="sm"
                              className="tw-text-white"
                              family="universe"
                              italic
                            >
                              ({i.name}) {i.value}
                            </Paragraphs>
                          </div>
                        )}
                      </motion.div>
                    );
                })
            }
        </div>
    )
}

Features.propTypes = {
    data: PropTypes.array
}

Features.defaultProps = {
    data: []
}

export default Features
